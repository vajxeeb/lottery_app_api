
pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                sh 'docker image ls'
                sh 'docker build -t finance_api2 .'
                sh 'docker image ls'
                sh 'cat /etc/docker/password.txt | docker login 49.0.198.122:5001 --username admin --password-stdin'
                sh 'docker tag finance_api2 49.0.198.122:5001/finance_api2:latest'
                sh 'docker push 49.0.198.122:5001/finance_api2:latest'
            }
        }
    }
 
}
