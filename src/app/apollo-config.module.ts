import { NgModule } from '@angular/core';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class ApolloConfigModule {

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {
    const uri = 'https://api.graph.cool/simple/v1/cjjt8rdvf3r4z0128jvg909w4';
    const http = httpLink.create({
      uri
    });

    apollo.create({
      link: http,
      cache: new InMemoryCache(),
      connectToDevTools: !environment.production
    });
  }
}
