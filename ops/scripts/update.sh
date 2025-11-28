#!/bin/bash
systemctl stop developer-portfolio
systemctl disable developer-portfolio
cp $HOME/developer-portfolio/ops/systemd/developer-portfolio.service /etc/systemd/system
systemctl daemon-reload
systemctl enable developer-portfolio
systemctl start developer-portfolio
