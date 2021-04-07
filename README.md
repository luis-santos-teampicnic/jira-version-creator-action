# Create JIRA version

This action creates a version in a Jira project.

## Inputs

### `project`

**Required** The project ID

### `version`

**Required** The version name to be created

### `username`

**Required** The username to connect to Jira (store it in the action secrets!)

### `password`

**Required** The API token to connect to Jira (store it in the action secrets!)

### `host`

**Required** The hostname of your Jira instance

### `released`

**Optional** Boolean indicating if the version should be created as released or not
(Default: true)

## Outputs

— None! —

## Example usage

```yaml
name: Create Version in Jira Project
on:
  release:
    types: [published]

jobs:
  create-jira-version:
    runs-on: ubuntu-latest
    steps:
      - name: Create JIRA version
        uses: actions/jira-version-creator-action@v1.0.0
        with:
            host: demo-account.atlassian.net
            username: ${{ secrets.JIRA_USERNAME }}
            password: ${{ secrets.JIRA_API_TOKEN }}
            project: DEMO
            version:  ${{ github.event.release.tag_name }}
            released: true
```
