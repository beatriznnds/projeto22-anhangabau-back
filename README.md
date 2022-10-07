<h1 align=center> Piecing together memories </h1>

<h2 align=center> WHAT IS IT? </h2>
<p align=center> This app is a dynamic map in which users can add markers on it and pictures that refers to what the place looked like, adding captions to explain the origin of the pictures!</p>

```
TO SIGN UP:
HTTP request method: .POST('/signup');
req object expects:
    body: email, password, name;
```

```
TO LOGIN:
HTTP request method: .POST('/login');
req object expects:
    body: email, password;
```

```
TO CREATE COORDINATE:
HTTP request method: .POST('/coordinates');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    body: latitude, longitude, streetName;
```

```
TO GET COORDINATE:
HTTP request method: .GET('/coordinates');
req object expects:
    headers: { "Authorization": "Bearer $token" };
```

```
TO CREATE POST:
HTTP request method: .POST('/info');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    body: imageUrl, caption, streetId;
```

```
TO GET POST:
HTTP request method: .POST('/info');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    params: id;
```

```
TO CREATE STREET:
HTTP request method: .POST('/street');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    body: name;
```

```
TO CREATE STREET:
HTTP request method: .POST('/street');
req object expects:
    headers: { "Authorization": "Bearer $token" };
```

<h2 align=center> FOR TESTING </h2>

Install dependencies

```bash
  npm install
```

Install prisma database

```bash
  npx prisma migrate dev
```

To run only integration tests

```bash
  npm run test:integration
```

To run only unitary tests

```bash
  npm run test:unit
```

To run both tests: unitary and integration

```bash
  npm run test
```
