#!/bin/bash
#
mkcert -install
mkcert "pass-ass.local" "*.pass-ass.local"
mkdir -p .docker/certs
cp pass-ass.local+1-key.pem pass-ass.local+1.pem .docker/certs
rm -rf pass-ass.local+1*
