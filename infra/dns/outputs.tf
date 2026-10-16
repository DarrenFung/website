output "apex_record" {
  value = aws_route53_record.apex.fqdn
}

output "www_record" {
  value = aws_route53_record.www.fqdn
}
