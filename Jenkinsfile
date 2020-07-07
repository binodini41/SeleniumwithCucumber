pipeline{
agent any

stages{
       stage ('compile Stage'){
          Steps{
              withMaven(maven : 'Maven_home' ){
                       sh 'mvn clean compile'
                       }
                      }
                      }

          stage ('Testing Stage'){
                Steps{
                withMaven(maven : 'Maven_home' ){
                           sh 'mvn test'
                                }
                               }
                                   }
          stage ('Deployment Stage'){
                     Steps{
                      withMaven(maven : 'Maven_home' ){
                              sh 'mvn deploy'
                                  }
                                  }
                                  }
   }
   }