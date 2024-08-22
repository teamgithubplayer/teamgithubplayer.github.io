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
                sh 'npm ci'
                sh "npm run test:ci:record"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying1....'
            }
        }
    }
}