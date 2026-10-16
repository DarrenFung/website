terraform {
  required_version = ">= 1.10.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  # Chicken-and-egg: this stack creates the bucket it stores its own state in.
  # First apply ran with local state, then was migrated here with
  # `terraform init -migrate-state`.
  backend "s3" {
    bucket       = "darrenfung-terraform-state-915262760025"
    key          = "bootstrap/terraform.tfstate"
    region       = "ca-central-1"
    encrypt      = true
    use_lockfile = true
  }
}

provider "aws" {
  region = var.aws_region
}
