pipeline {
    agent any

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