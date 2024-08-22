pipeline {
    agent any

    tools {nodejs "Node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
   
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