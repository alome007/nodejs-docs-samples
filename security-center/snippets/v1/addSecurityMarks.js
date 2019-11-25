// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * Demostrates adding security marks to an asset.
 */
function main(assetName = 'full asset path to add marks to') {
  // [START demo]
  // Imports the Google Cloud client library.
  const {SecurityCenterClient} = require('@google-cloud/security-center');

  // Creates a new client.
  const client = new SecurityCenterClient();

  async function addSecurityMarks() {
    // assetName is the full resource path for the asset to update.
    /*
     * TODO(developer): Uncomment the following lines
     */
    // const assetName = "organizations/123123342/assets/12312321";
    const [newMarks] = await client.updateSecurityMarks({
      securityMarks: {
        name: `${assetName}/securityMarks`,
        marks: {key_a: 'value_a', key_b: 'value_b'},
      },
      // Only update the marks with these keys.
      updateMask: {paths: ['marks.key_a', 'marks.key_b']},
    });

    console.log('New marks: %', newMarks);
  }
  addSecurityMarks();
  // [END demo]
}

main(...process.argv.slice(2));
