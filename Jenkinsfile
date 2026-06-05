pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Vipin23Yadav/blog-app.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
    steps {
        sh '''
        /usr/bin/pm2 restart index || /usr/bin/pm2 start index.js --name index
        '''
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
