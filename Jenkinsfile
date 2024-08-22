pipeline {
    agent {
        docker {
            image 'cypress/base:20.14.0'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh "npm run cy:open"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying3....'
            }
        }
    }
}