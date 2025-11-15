output "instance_public_ip" {
  description = "Public IP of the EC2 instance"
  value       = aws_instance.stock_app.public_ip
}

output "instance_id" {
  description = "EC2 instance id"
  value       = aws_instance.stock_app.id
}

output "frontend_ecr_repo_url" {
  description = "Frontend ECR repository URI"
  value       = aws_ecr_repository.frontend.repository_url
}

output "backend_ecr_repo_url" {
  description = "Backend ECR repository URI"
  value       = aws_ecr_repository.backend.repository_url
}
