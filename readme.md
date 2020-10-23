# Conceitos Avançados de performance e otimização usando Angular 

## O que queremos otimizar ? 
- Tempo de carregamento 
tempo entre acessso e utilização 
- Tempo de execução 
Melhoria no tempo de navegação e renderização dos elementos do DOM 

Como o angular aborda otimização 

![](./perf.PNG)

- AOT é um assunto bom paara estudar depois 

pwa = Progressive web app

web workers -> Front end multithread (evitar travamento do browser)

SSR- Compila no back e retorna só o dinamico 

virtual scroll -> só carrega o que está visível na página 

- colocou o nome das pastas como @ core e @ shared para ficarem sempre em primeiro na listagem de pastas 

- enableProdMode() -> Otimiza para modo produção 

- no main.ts

import { enableProdMode } from '@angular/core';

if (environment.production){
  enableProdMode();
}

- no starter-kit\src\app\about\about-routing.module.ts
const routes: Routes = [{ 
path: '', 
component: AboutComponent, 
data: { title: marker('About') } }
];


## carregamento tardio de recursos 

- construindo o modulo em bundles ( pacotes ) diferentes 

lazy load -> O módulo será renderizado quando necessário, diminuindo assim o tempo de carregamento do main Isso é o ideal para partes pouco usadas ou que possam ser usadas depois, como o about. Vamos fazer isso com o about e trazer esse delay para o runtime. 
Vc vai até o app.module.ts (bootstrap da aplicação), remove o módulo do @NgModule senão ele continuará sendo incluido no bundle 

incluimos no routes. starter-kit\src\app\app-routing.module.ts

  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
  },

- nunca faça lazy load da rota inicial ! 
- lazy route de componente 

## Change Detection 

- OnPush : componente imutável  só sendo mudado se o @input for mudado 

- mudamos o header.component.ts

```Js
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {}

  get username(): string | null {
    return null;
  }
}

```

- fazer um componente com change detection onPush
- EStudar input e output para trocar informações entre componentes 1:14:30

## Trackby

- vamos criar um novo modulo 
- ng g m list-example --route listExample --module app.module

criou o modulo starter-kit\src\app\list-example
criou a rota no starter-kit\src\app\app-routing.module.ts

  { path: 'listExample', loadChildren: () => import('./list-example/list-example.module').then(m => m.ListExampleModule) },

- alteramos starter-kit\src\app\app-routing.module.ts para que pre carregue todos os módulos 


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}


- vamos criar um service dentro de list-example 
- ng g service list-example/example-service

ele deve ser importado pelo starter-kit\src\app\list-example\list-example.module.ts

```JS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ExampleServiceService} from './example-service.service'
import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';


@NgModule({
  declarations: [ListExampleComponent],
  imports: [
    CommonModule,
    ListExampleRoutingModule
  ],
  providers:[
    ExampleServiceService
  ]
})
export class ListExampleModule { }
```

o ideal teria sido criar uma pasta service e coloca-lo dentro da pasta service 

- vamos usar uma service para listar repositorios do github 

dentro do core tem uma rota que usaremos no example-service que ficará assim  : 

```JS

import { Injectable } from '@angular/core';

const routes = {
  quote: () => `/users`,
};

@Injectable({
  providedIn: 'root'
})
export class ExampleServiceService {

  constructor(private httpClient:HttpClient) { }
}
```

a classe QuoteService dentro do starter-kit\src\app\home\quote.service.ts está usando em seu contrutor um httpClient que usaremos 

Obs: Control espaço importa automatimante o import 

- http já está sendo importado na aplicação então é só usarmos 

- Observable ? 

- mudamos o environment e rerescrevemos o quote service para fazer um request aos users do github 



export const environment = {
  production: false,
  hmr: true,
  version: env.npm_package_version + '-dev',
  gitHubUrl: '',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};

```JS
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  users: () => `/users`,
};
```

```JS
@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private httpClient:HttpClient) { }

  getUsers () {
    return this.httpClient.get(routes.users())
    .pipe(
      catchError(() => of('Error, could not load users'))
    );

  }
}
```

```Js
import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example-service.service';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {

  items = new Array(1000);
  constructor (private exampleService:ExampleService) { }

  ngOnInit(): void {
    this.exampleService.getUsers()
    .subscribe((users)=>{
        console.log(users);
    })
  }


```

Desafio : 

![](./desafio.PNG)

Post patch  e delete 

ou com Github  ou local 

- mapear o opbjeto de usuario em starter-kit\src\app\list-example\list-example.component.ts


-colocalo para dentro do services 
starter-kit\src\app\list-example\example-service.service.ts


- tentei criar um json server 

npm install -g json-server
- criei o arquivo db.json dentro da pasta db dentro de source 
json-server --watch db.json


dai vamos usar manipular esse usuario 


- https://api.github.com/users/1 retorna apenas o user com id 1 


- fazer um fork e um pull request 

- olhar o providedIn no exampleservice.service (nao utilizado nao faz parte do bundle )

- Lazy load 

- Change detection (cada row da tabela seja um componente dica  : Ngcontent)
https://medium.com/mestre-angular/entenda-change-detection-no-angular-b5f2fdf65000
https://medium.com/senior/criando-componente-angular-com-conteudo-dinamico-ng-content-82334babe134


- avatar do usuario vai ser um componente , que vai ter um input que vai usar onchange detenction push 
se a row alterar e o avatar nao alterar nao deve renderizar o componente de novo 

- colocar a lista de usuários no service se não coinseguir usar o github 

























