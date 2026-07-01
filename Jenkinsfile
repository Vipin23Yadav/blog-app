pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                echo 'Cloning latest code from GitHub...'
                git branch: 'main',
                    url: 'https://github.com/Vipin23Yadav/blog-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t blog-app:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                echo 'Stopping old container if running...'
                sh 'docker stop blog-app || true'
                sh 'docker rm blog-app || true'
            }
        }

        stage('Run New Container') {
            steps {
                echo 'Starting new container...'
                sh 'docker run -d --name blog-app -p 3000:3000 blog-app:latest'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful! 🎉'
        }
        failure {
            echo 'Deployment failed! ❌'
        }
    }
}
