variable "aws_region" {
  description = "Region for the state bucket."
  type        = string
  default     = "ca-central-1"
}

variable "state_bucket_name" {
  description = "Globally unique name for the Terraform state bucket. Suffixed with the account ID to avoid collisions."
  type        = string
  default     = "darrenfung-terraform-state-915262760025"
}

variable "noncurrent_version_retention_days" {
  description = "How long to keep previous state versions for recovery."
  type        = number
  default     = 90
}
