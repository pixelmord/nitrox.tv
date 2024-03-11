#!/bin/bash
for f in *.md
do
    slug="$(tr [A-Z] [a-z] <<< "${f%.md}")"
    gsed -i -e "2 islug: ${slug}" ${f}
done
