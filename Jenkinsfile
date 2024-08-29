pipeline {
    agent any

    tools {nodejs "Node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
   
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Dependencies') {
            steps {
                echo 'Dependencies..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo '\033[34mHello\033[0m \033[33mcolorful\033[0m \033[35mworld!\033[0m'
                sh "npm i"
                sh "npm run cy:run"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying3....'
            }
        }
    }
}