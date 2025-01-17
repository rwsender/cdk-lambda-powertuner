import { expect as expectCDK, haveResourceLike, haveOutput } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { LambdaPowerTuner } from '../lib/cdk-lambda-powertuner/cdk-lambda-powertuner-construct';

test('initializer Lambda Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');

  new LambdaPowerTuner(stack, 'powerTuner', {
    lambdaResource: 'arn:1234:1234:1234:1234:1234'
  })
  // THEN
  expectCDK(stack).to(haveResourceLike("AWS::Lambda::Function", {
    "Handler": "initializer.handler",
    "Runtime": "nodejs12.x",
    "Environment": {
      "Variables": {
        "defaultPowerValues": "128,256,512,1024,1536,3008",
        "minRAM": "128",
        "baseCosts": '{"x86_64": {"ap-east-1":2.9e-9,"af-south-1":2.8e-9,"me-south-1":2.6e-9,"eu-south-1":2.4e-9,"ap-northeast-3":2.7e-9,"default":2.1e-9}, "arm64": {"default":1.7e-9}}',
        "sfCosts": '{"default": 0.000025,"us-gov-west-1": 0.00003,"ap-northeast-2": 0.0000271,"eu-south-1": 0.00002625,"af-south-1": 0.00002975,"us-west-1": 0.0000279,"eu-west-3": 0.0000297,"ap-east-1": 0.0000275,"me-south-1": 0.0000275,"ap-south-1": 0.0000285,"us-gov-east-1": 0.00003,"sa-east-1": 0.0000375}',
        "visualizationURL": "https://lambda-power-tuning.show/"
      }
    },
    "MemorySize": 128,
    "Timeout": 300
  }));
});

test('executor Lambda Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');

  new LambdaPowerTuner(stack, 'powerTuner', {
    lambdaResource: 'arn:1234:1234:1234:1234:1234'
  })
  // THEN
  expectCDK(stack).to(haveResourceLike("AWS::Lambda::Function", {
    "Handler": "executor.handler",
    "Runtime": "nodejs12.x",
    "Environment": {
      "Variables": {
        "defaultPowerValues": "128,256,512,1024,1536,3008",
        "minRAM": "128",
        "baseCosts": "{\"x86_64\": {\"ap-east-1\":2.9e-9,\"af-south-1\":2.8e-9,\"me-south-1\":2.6e-9,\"eu-south-1\":2.4e-9,\"ap-northeast-3\":2.7e-9,\"default\":2.1e-9}, \"arm64\": {\"default\":1.7e-9}}",
        "sfCosts": "{\"default\": 0.000025,\"us-gov-west-1\": 0.00003,\"ap-northeast-2\": 0.0000271,\"eu-south-1\": 0.00002625,\"af-south-1\": 0.00002975,\"us-west-1\": 0.0000279,\"eu-west-3\": 0.0000297,\"ap-east-1\": 0.0000275,\"me-south-1\": 0.0000275,\"ap-south-1\": 0.0000285,\"us-gov-east-1\": 0.00003,\"sa-east-1\": 0.0000375}",
        "visualizationURL": "https://lambda-power-tuning.show/"
      }
    },
    "MemorySize": 128,
    "Timeout": 300
  }));
});

test('cleaner Lambda Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');

  new LambdaPowerTuner(stack, 'powerTuner', {
    lambdaResource: 'arn:1234:1234:1234:1234:1234'
  })
  // THEN
  expectCDK(stack).to(haveResourceLike("AWS::Lambda::Function", {
    "Handler": "cleaner.handler",
    "Runtime": "nodejs12.x",
    "Environment": {
      "Variables": {
        "defaultPowerValues": "128,256,512,1024,1536,3008",
        "minRAM": "128",
        "baseCosts": "{\"x86_64\": {\"ap-east-1\":2.9e-9,\"af-south-1\":2.8e-9,\"me-south-1\":2.6e-9,\"eu-south-1\":2.4e-9,\"ap-northeast-3\":2.7e-9,\"default\":2.1e-9}, \"arm64\": {\"default\":1.7e-9}}",
        "sfCosts": "{\"default\": 0.000025,\"us-gov-west-1\": 0.00003,\"ap-northeast-2\": 0.0000271,\"eu-south-1\": 0.00002625,\"af-south-1\": 0.00002975,\"us-west-1\": 0.0000279,\"eu-west-3\": 0.0000297,\"ap-east-1\": 0.0000275,\"me-south-1\": 0.0000275,\"ap-south-1\": 0.0000285,\"us-gov-east-1\": 0.00003,\"sa-east-1\": 0.0000375}",
        "visualizationURL": "https://lambda-power-tuning.show/"
      }
    },
    "MemorySize": 128,
    "Timeout": 300
  }));
});

test('analyzer Lambda Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');

  new LambdaPowerTuner(stack, 'powerTuner', {
    lambdaResource: 'arn:1234:1234:1234:1234:1234'
  })
  // THEN
  expectCDK(stack).to(haveResourceLike("AWS::Lambda::Function", {
    "Handler": "analyzer.handler",
    "Runtime": "nodejs12.x",
    "Environment": {
      "Variables": {
        "defaultPowerValues": "128,256,512,1024,1536,3008",
        "minRAM": "128",
        "baseCosts": "{\"x86_64\": {\"ap-east-1\":2.9e-9,\"af-south-1\":2.8e-9,\"me-south-1\":2.6e-9,\"eu-south-1\":2.4e-9,\"ap-northeast-3\":2.7e-9,\"default\":2.1e-9}, \"arm64\": {\"default\":1.7e-9}}",
        "sfCosts": "{\"default\": 0.000025,\"us-gov-west-1\": 0.00003,\"ap-northeast-2\": 0.0000271,\"eu-south-1\": 0.00002625,\"af-south-1\": 0.00002975,\"us-west-1\": 0.0000279,\"eu-west-3\": 0.0000297,\"ap-east-1\": 0.0000275,\"me-south-1\": 0.0000275,\"ap-south-1\": 0.0000285,\"us-gov-east-1\": 0.00003,\"sa-east-1\": 0.0000375}",
        "visualizationURL": "https://lambda-power-tuning.show/"
      }
    },
    "MemorySize": 128,
    "Timeout": 10
  }));
});

test('optimizer Lambda Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');

  new LambdaPowerTuner(stack, 'powerTuner', {
    lambdaResource: 'arn:1234:1234:1234:1234:1234'
  })
  // THEN
  expectCDK(stack).to(haveResourceLike("AWS::Lambda::Function", {
    "Handler": "optimizer.handler",
    "Runtime": "nodejs12.x",
    "Environment": {
      "Variables": {
        "defaultPowerValues": "128,256,512,1024,1536,3008",
        "minRAM": "128",
        "baseCosts": "{\"x86_64\": {\"ap-east-1\":2.9e-9,\"af-south-1\":2.8e-9,\"me-south-1\":2.6e-9,\"eu-south-1\":2.4e-9,\"ap-northeast-3\":2.7e-9,\"default\":2.1e-9}, \"arm64\": {\"default\":1.7e-9}}",
        "sfCosts": "{\"default\": 0.000025,\"us-gov-west-1\": 0.00003,\"ap-northeast-2\": 0.0000271,\"eu-south-1\": 0.00002625,\"af-south-1\": 0.00002975,\"us-west-1\": 0.0000279,\"eu-west-3\": 0.0000297,\"ap-east-1\": 0.0000275,\"me-south-1\": 0.0000275,\"ap-south-1\": 0.0000285,\"us-gov-east-1\": 0.00003,\"sa-east-1\": 0.0000375}",
        "visualizationURL": "https://lambda-power-tuning.show/"
      }
    },
    "MemorySize": 128,
    "Timeout": 300
  }));
});

test('State Machine Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');

  new LambdaPowerTuner(stack, 'powerTuner', {
    lambdaResource: 'arn:1234:1234:1234:1234:1234'
  })
  // THEN
  expectCDK(stack).to(haveResourceLike("AWS::StepFunctions::StateMachine", {
      "DefinitionString": {
        "Fn::Join": [
          "",
          [
            "{\"StartAt\":\"Initializer\",\"States\":{\"Initializer\":{\"Next\":\"cleanup $.powerValues\",\"Catch\":[{\"ErrorEquals\":[\"States.ALL\"],\"ResultPath\":\"$.error\",\"Next\":\"CleanUpOnError\"}],\"Parameters\":{\"FunctionName\":\"",
            {
              "Ref": "powerTunerinitializerE42CBB83"
            },
            "\",\"Payload.$\":\"$\"},\"Type\":\"Task\",\"Resource\":\"arn:",
            {
              "Ref": "AWS::Partition"
            },
            ":states:::lambda:invoke\",\"ResultPath\":\"$.powerValues\"},\"cleanup $.powerValues\":{\"Type\":\"Pass\",\"ResultPath\":\"$.powerValues\",\"InputPath\":\"$.powerValues.Payload\",\"Next\":\"Branching\"},\"Branching\":{\"Type\":\"Map\",\"ResultPath\":\"$.stats\",\"Next\":\"cleanup $.stats array\",\"Parameters\":{\"value.$\":\"$$.Map.Item.Value\",\"lambdaARN.$\":\"$.lambdaARN\",\"num.$\":\"$.num\",\"input.$\":\"$\",\"payload.$\":\"$.payload\",\"parallelInvocation.$\":\"$.parallelInvocation\"},\"Catch\":[{\"ErrorEquals\":[\"States.ALL\"],\"ResultPath\":\"$.error\",\"Next\":\"CleanUpOnError\"}],\"Iterator\":{\"StartAt\":\"Iterator\",\"States\":{\"Iterator\":{\"End\":true,\"Retry\":[{\"ErrorEquals\":[\"States.ALL\"],\"IntervalSeconds\":3,\"MaxAttempts\":2}],\"Parameters\":{\"FunctionName\":\"",
            {
              "Ref": "powerTunerexecutorFAA55CAC"
            },
            "\",\"Payload.$\":\"$\"},\"Type\":\"Task\",\"Resource\":\"arn:",
            {
              "Ref": "AWS::Partition"
            },
            ":states:::lambda:invoke\"}}},\"ItemsPath\":\"$.powerValues\",\"MaxConcurrency\":0},\"cleanup $.stats array\":{\"Type\":\"Pass\",\"ResultPath\":\"$.stats\",\"InputPath\":\"$.stats[*].Payload\",\"Next\":\"Cleaner\"},\"Cleaner\":{\"Next\":\"Analyzer\",\"Parameters\":{\"FunctionName\":\"",
            {
              "Ref": "powerTunercleanerAB51CBF0"
            },
            "\",\"Payload.$\":\"$\"},\"Type\":\"Task\",\"Resource\":\"arn:",
            {
              "Ref": "AWS::Partition"
            },
            ":states:::lambda:invoke\",\"ResultPath\":\"$.cleaner\"},\"Analyzer\":{\"Next\":\"cleanup $.analysis\",\"Parameters\":{\"FunctionName\":\"",
            {
              "Ref": "powerTuneranalyzerDBE209DF"
            },
            "\",\"Payload.$\":\"$\"},\"Type\":\"Task\",\"Resource\":\"arn:",
            {
              "Ref": "AWS::Partition"
            },
            ":states:::lambda:invoke\",\"ResultPath\":\"$.analysis\"},\"cleanup $.analysis\":{\"Type\":\"Pass\",\"ResultPath\":\"$.analysis\",\"InputPath\":\"$.analysis.Payload\",\"Next\":\"Optimizer\"},\"Optimizer\":{\"End\":true,\"Parameters\":{\"FunctionName\":\"",
            {
              "Ref": "powerTuneroptimizer8E2EECDF"
            },
            "\",\"Payload.$\":\"$\"},\"OutputPath\":\"$.analysis\",\"Type\":\"Task\",\"Resource\":\"arn:",
            {
              "Ref": "AWS::Partition"
            },
            ":states:::lambda:invoke\",\"ResultPath\":\"$.optimizer\"},\"CleanUpOnError\":{\"End\":true,\"Parameters\":{\"FunctionName\":\"",
            {
              "Ref": "powerTunercleanerAB51CBF0"
            },
            "\",\"Payload.$\":\"$\"},\"Type\":\"Task\",\"Resource\":\"arn:",
            {
              "Ref": "AWS::Partition"
            },
            ":states:::lambda:invoke\"}}}"
        ]
      ]
    }
  }
  ));
});

test('State Machine Arn Export Output Not Enabled', () => {
  const exportName = 'export-test-name';
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');

  new LambdaPowerTuner(stack, 'powerTuner', {
    lambdaResource: 'arn:1234:1234:1234:1234:1234',
  });

  // THEN
  expectCDK(stack).notTo(haveOutput({
    exportName: exportName
  }));
});

test('State Machine Arn Export Output Enabled With No Name', () => {
  const exportName = 'export-test-name';
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');

  new LambdaPowerTuner(stack, 'powerTuner', {
    lambdaResource: 'arn:1234:1234:1234:1234:1234',
    exportStepFunction: true
  });

  // THEN
  expectCDK(stack).notTo(haveOutput({
    exportName: exportName
  }));
});

test('State Machine Arn Export Output Enabled With No Name', () => {
  const exportName = 'export-test-name';
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');

  new LambdaPowerTuner(stack, 'powerTuner', {
    lambdaResource: 'arn:1234:1234:1234:1234:1234',
    exportStepFunction: true,
    exportedStepFunctionName: exportName
  });

  // THEN
  expectCDK(stack).to(haveOutput({
    exportName: exportName
  }));
});
