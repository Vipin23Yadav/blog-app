pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                echo 'Pulling latest code from GitHub...'
                dir('/var/lib/jenkins/blog-app') {
                    sh 'git reset --hard origin/main'
                    sh 'git pull origin main'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                dir('/var/lib/jenkins/blog-app') {
                    sh 'npm install'
                }
            }
        }

        stage('Restart App') {
            steps {
                echo 'Restarting app with PM2...'
                sh '/usr/bin/pm2 restart index || /usr/bin/pm2 start /var/lib/jenkins/blog-app/index.js --name index'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
