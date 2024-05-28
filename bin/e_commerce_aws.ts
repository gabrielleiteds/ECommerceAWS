#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ECommerceAPIStack } from '../lib/ecommerceAPI-stack';
import { ProductsAppStack } from '../lib/productsApp-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: '543930334550',
  region: 'us-east-1',
};

const tags = {
  cost: 'ECommerce',
  team: 'Cloud House IT',
};

const productsAppStack = new ProductsAppStack(app, 'ProductsApp', {
  tags,
  env,
});

const eCommerceAPIStack = new ECommerceAPIStack(app, 'ECommerceAPI', {
  tags,
  env,
  productsFetchHandler: productsAppStack.productsFetchHandler,
});
eCommerceAPIStack.addDependency(productsAppStack);
