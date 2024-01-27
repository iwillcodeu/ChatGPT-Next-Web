export function makeAzurePath(path: string, apiVersion: string) {
  // should omit /v1 prefix
  path = path.replace("v1/", "");

  // should add api-key to query string
  path += `?api-version=${apiVersion}`;

  return path;
}
