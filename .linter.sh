#!/bin/bash
cd /home/kavia/workspace/code-generation/gitinsight-explorer-93908-93916/gitinsight_explorer
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

