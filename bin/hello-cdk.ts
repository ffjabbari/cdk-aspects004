#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Aspects } from '@aws-cdk/core';
import { HelloCdkStack } from '../lib/hello-cdk-stack';
import { ApplyTags } from '../src/aspects/apply-tags';

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack');

const appAspects = Aspects.of(app);

appAspects.add(new ApplyTags({
  stage: 'dev',
  project: 'CDK AspectsFred',
  owner: 'Fred Jabbari'
}));
