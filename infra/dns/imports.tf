# Adopt the records that previously pointed at Squarespace so Terraform
# updates them in place instead of failing on "record already exists".
import {
  to = aws_route53_record.apex
  id = "Z1Q4HT19OP3TP0_darrenfung.ca_A"
}

import {
  to = aws_route53_record.www
  id = "Z1Q4HT19OP3TP0_www.darrenfung.ca_CNAME"
}
