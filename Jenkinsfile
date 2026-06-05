pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                echo 'Pulling latest code from GitHub...'
                dir('/home/ec2-user/blog-app') {
                    sh 'git pull origin main'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                dir('/home/ec2-user/blog-app') {
                    sh 'npm install'
                }
            }
        }

        stage('Restart App') {
            steps {
                echo 'Restarting app with PM2...'
                sh 'sudo /usr/local/bin/pm2 restart index || sudo /usr/local/bin/pm2 start /home/ec2-user/blog-app/index.js --name index'
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
