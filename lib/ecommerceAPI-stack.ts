import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambdaNodeJS from 'aws-cdk-lib/aws-lambda-nodejs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cwlogs from 'aws-cdk-lib/aws-logs';

// class to create API Gateway Stack
export class ECommerceAPIStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigateway.RestApi(this, 'ECommerceAPI', {
      restApiName: 'ECommerceAPI',
    });
  }
}
