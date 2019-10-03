---
sidebarDepth: 3
---

# API

GraphQL

## Queries

### Categories

> **_Authentication:_** Required

```json
query {
  categories{
    id
    name
    challenges{
		...
    }
    createdAt
    updatedAt
  }
}
```

### Challenges

> **_Authentication:_** Required

```json
query {
  challenges{
    id
    name
    description
    points
    category {
      ...
    }
    solvedchallengeSet {
      ...
    }
    createdAt
    updatedAt
  }
}
```

### Teams

> **_Authentication:_** Required

::: warning
Teams API will change in a future release to better secure user and team information
:::

```json
query{
  teams{
    id
    name
    affiliation
    website
    accesscode
    players{
      user{
        ...
      }
    }
  	correctFlags
    wrongFlags
    solved{
      ...
    }
  }
}
```

### Users

> **_Authentication:_** Required

::: warning
Users API will change in a future release to better secure user and team information
:::

```json
query{
  users{
    id
    username
    firstName
    lastName
    email
    isStaff
    isSuperuser
    isActive
    profile{
      ...
    }
	}
}
```

### Solves

> **_Authentication:_** Required

```json
query {
  solves{
    id
    team{
      ...
    }
    user{
      ...
    }
    challenge{
      ...
    }
    timestamp
  }
}
```

## Mutations
