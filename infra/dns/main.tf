# The hosted zone (and its MX/TXT/DKIM records for Google Workspace) predates
# Terraform and is left unmanaged; only the web records are owned here.
data "aws_route53_zone" "primary" {
  name         = var.domain_name
  private_zone = false
}

# Apex can't be a CNAME, so point it at Netlify's load balancer.
resource "aws_route53_record" "apex" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = var.domain_name
  type    = "A"
  ttl     = var.ttl
  records = [var.netlify_load_balancer_ip]
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "www.${var.domain_name}"
  type    = "CNAME"
  ttl     = var.ttl
  records = [var.netlify_site_subdomain]
}
