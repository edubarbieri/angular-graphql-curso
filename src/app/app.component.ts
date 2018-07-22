import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private apollo: Apollo
  ) {
    this.allUser();
    // this.createUser();
  }

  allUser(): void {
    this.apollo.query({
      query: gql`
        query{
            allUsers{
              id
              name
              email
            }
        }
      `
    }).subscribe(res => console.log('Query: ', res));
  }
  createUser(): void {
    const body = {
      query: `
        mutation CreateNewUser($name: String!, $email: String!, $password: String!){
          createUser(name: $name, email: $email, password: $password){
            id
            name
            email
          }
        }
      `,
      variables: {
        name: 'Matheus Barbieri',
        email: 'mdsbarbieri@gmail.com',
        password: 'teste12'
      }
    };
    this.apollo.mutate({
      mutation: gql`
        mutation CreateNewUser($name: String!, $email: String!, $password: String!){
          createUser(name: $name, email: $email, password: $password){
            id
            name
            email
          }
        }
      `,
      variables: {
        name: 'Iron Man',
        email: 'ironman@gmail.com',
        password: 'teste12'
      }
    }).subscribe(res => console.log('Mutation', res));
  }


}
