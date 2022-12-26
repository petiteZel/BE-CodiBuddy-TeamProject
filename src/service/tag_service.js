const { Tag } = require("../db/models");

class TagService {
  constructor(Tag_model) {
    this.Tag = Tag_model;
  }

  async getTag() {
    const findAllTag = this.Tag.findAll({});

    return findAllTag;
  }
  async addTag() {
    const data = [
      {
        tag_name: 'JavaScript',
        tag_image: 'https://holaworld.io/images/languages/javascript.svg',
      },
      {
        tag_name: 'TypeScript',
        tag_image: 'https://holaworld.io/images/languages/typescript.svg',
      },
      {
        tag_name: 'React',
        tag_image: 'https://holaworld.io/images/languages/react.svg',
      },
      {
        tag_name: 'Vue',
        tag_image: 'https://holaworld.io/images/languages/vue.svg',
      },
      {
        tag_name: 'Svelt',
        tag_image: 'https://holaworld.io/images/languages/svelte.svg',
      },
      {
        tag_name: 'Nodejs',
        tag_image: 'https://holaworld.io/images/languages/nodejs.svg',
      },
      {
        tag_name: 'Nextjs',
        tag_image: 'https://holaworld.io/images/languages/nextjs.svg',
      },
      {
        tag_name: 'Java',
        tag_image: 'https://holaworld.io/images/languages/java.svg',
      },
      {
        tag_name: 'Spring',
        tag_image: 'https://holaworld.io/images/languages/spring.svg',
      },
      {
        tag_name: 'Go',
        tag_image: 'https://holaworld.io/images/languages/go.svg',
      },
      {
        tag_name: 'Nestjs',
        tag_image: 'https://holaworld.io/images/languages/nestjs.svg',
      },
      {
        tag_name: 'Kotlin',
        tag_image: 'https://holaworld.io/images/languages/kotlin.svg',
      },
      {
        tag_name: 'Express',
        tag_image: 'https://holaworld.io/images/languages/express.svg',
      },
      {
        tag_name: 'MySQL',
        tag_image: 'https://holaworld.io/images/languages/mysql.svg',
      },
      {
        tag_name: 'MongoDB',
        tag_image: 'https://holaworld.io/images/languages/mongodb.svg',
      },
      {
        tag_name: 'Python',
        tag_image: 'https://holaworld.io/images/languages/python.svg',
      },
      {
        tag_name: 'Django',
        tag_image: 'https://holaworld.io/images/languages/django.svg',
      },
      {
        tag_name: 'php',
        tag_image: 'https://holaworld.io/images/languages/php.svg',
      },
      {
        tag_name: 'GraphQL',
        tag_image: 'https://holaworld.io/images/languages/graphql.svg',
      },
      {
        tag_name: 'Firebase',
        tag_image: 'https://holaworld.io/images/languages/firebase.svg',
      },
      {
        tag_name: 'Flutter',
        tag_image: 'https://holaworld.io/images/languages/flutter.svg',
      },
      {
        tag_name: 'Swift',
        tag_image: 'https://holaworld.io/images/languages/swift.svg',
      },
      {
        tag_name: 'ReactNative',
        tag_image: 'https://holaworld.io/images/languages/reactnative.svg',
      },
      {
        tag_name: 'Unity',
        tag_image: 'https://holaworld.io/images/languages/unity.svg',
      },
      {
        tag_name: 'AWS',
        tag_image: 'https://holaworld.io/images/languages/aws.svg',
      },
      {
        tag_name: 'Kubernetes',
        tag_image: 'https://holaworld.io/images/languages/kubernetes.svg',
      },
      {
        tag_name: 'Docker',
        tag_image: 'https://holaworld.io/images/languages/docker.svg',
      },
      {
        tag_name: 'Git',
        tag_image: 'https://holaworld.io/images/languages/git.svg',
      },
      {
        tag_name: 'Figma',
        tag_image: 'https://holaworld.io/images/languages/figma.svg',
      },
      {
        tag_name: 'Zeplin',
        tag_image: 'https://holaworld.io/images/languages/zeplin.svg',
      },
      {
        tag_name: 'Jest',
        tag_image: 'https://holaworld.io/images/languages/jest.svg',
      },
    ];
    const createTag = data.map(async (e)=>{
      await this.Tag.create(e);
    }
    )

    return createTag;
  }

}

module.exports = new TagService(Tag);