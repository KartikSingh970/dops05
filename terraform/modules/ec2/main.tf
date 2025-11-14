resource "aws_key_pair" "main" {
  key_name   = "${var.project_name}-key"
  public_key = file(var.public_key_path)
}

resource "aws_security_group" "ec2_sg" {
  name   = "${var.project_name}-sg"
  vpc_id = var.vpc_id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5008
    to_port     = 5008
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "main" {
  ami                    = "ami-0f58b397bc5c33f3f" # Ubuntu 22.04 (Mumbai)
  instance_type          = var.instance_type
  subnet_id              = var.subnet_id
  key_name               = aws_key_pair.main.key_name
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]

  tags = {
    Name = "${var.project_name}-server"
  }
}
