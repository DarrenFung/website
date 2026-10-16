variable "aws_region" {
  description = "Region for the AWS provider. Route53 is global, but the provider still needs one."
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Apex domain of the existing Route53 hosted zone."
  type        = string
  default     = "darrenfung.ca"
}

variable "netlify_site_subdomain" {
  description = "Netlify site's default subdomain, used as the CNAME target for www."
  type        = string
  default     = "darrenfung.netlify.app"
}

variable "netlify_load_balancer_ip" {
  description = "Netlify's apex load balancer IP (https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/)."
  type        = string
  default     = "75.2.60.5"
}

variable "ttl" {
  description = "TTL in seconds for the web records."
  type        = number
  default     = 300
}
