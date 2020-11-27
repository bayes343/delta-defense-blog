# Delta Defense Blog
By: Joseph Bayes

Build Status: [![Build status](https://dev.azure.com/joseph-w-bayes/delta-defense-blog/_apis/build/status/delta-defense-blog-CI)](https://dev.azure.com/joseph-w-bayes/delta-defense-blog/_build/latest?definitionId=35)

## Installation / Local Dev
- Install dependencies - `npm i`
- Build and watch - `npm run dev`
- Local dev server: http://localhost:3000/

## Code Quality
- Linting - `npm run lint`
- Testing - `npm run test` | `npm run test-once`

## Deployment
A continuous delivery pipeline is setup for this project (referenced below).  All changes, which don't break the build, are automatically deployed to Firebase hosting (also linked below).

## Other Resources
- Repository: [GitHub](https://github.com/bayes343/delta-defense-blog)
- Pipeline: [Azure Devops Pipeline](https://dev.azure.com/joseph-w-bayes/delta-defense-blog/_build)
- Board: [Azure Devops Board](https://dev.azure.com/joseph-w-bayes/delta-defense-blog/_workitems/recentlycompleted/)
- Production site: https://delta-defense-blog.web.app/