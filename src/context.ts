import * as core from '@actions/core';
import {Util} from '@docker/actions-toolkit/lib/util';

export interface Inputs {
  image: string;
  platforms: string;
}

export function getInputs(): Inputs {
  return {
    image: core.getInput('image') || 'registry.playlegend.net/binfmt:latest',
    platforms: Util.getInputList('platforms').join(',') || 'all'
  };
}
