variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "aws_account_id" {
  type        = string
  description = "AWS ID"
}

variable "key_name" {
  type        = string
  description = "Keypair"
}

variable "allowed_ssh_cidr" {
  type    = string
  default = "0.0.0.0/0"
  description = "CIDR allowed to SSH to instance (change to your IP)"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  type    = string
  default = "10.0.1.0/24"
}


variable "frontend_repo_name" {
  type    = string
  default = "stock-frontend"
}

variable "backend_repo_name" {
  type    = string
  default = "stock-backend"
}

