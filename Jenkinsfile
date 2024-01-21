pipeline {
    agent {

	label 'dev'
    }

    stages {
        stage('Cloning Github Repo') {
            steps {
                script {
                    // Cloning the GitHub repository
                    git branch: 'main', credentialsId: '52234ca2-ff1a-4e74-badf-0ea067d1cacd', url: 'https://github.com/ibrahimZ91/node-hello-world.git'
                }
            }
        }

        stage('Building the image') {
            steps {
                script {
                    // Building Docker image
                    sh 'docker image build -t web_app:latest .'
                }
            }
        }
        stage('Stopping and removing all running containers') {
            steps {
                script {
                    // stopping all running containers.
                    sh 'docker stop $(docker ps -a -q)'
                    sh 'docker rm $(docker ps -a -q)'
                }
            }
        }
        stage('Creating a container') {
            steps {
                script {
                    // Creating a container from the Docker image
                    sh 'docker container run -d -p 80:3000 web_app:latest'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and container creation successful! You can add more post-build actions here.'
        }
        failure {
            echo 'Build or container creation failed! You can add more post-failure actions here.'
        }
    }
}
