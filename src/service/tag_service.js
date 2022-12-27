const { Tag, TagKind } = require("../db/models");

class TagService {
  constructor(Tag_model, Tag_kind_model) {
    this.Tag = Tag_model;
    this.TagKind = Tag_kind_model;
  }

  async getTag() {
    const findAllTag = this.Tag.findAll({});

    return findAllTag;
  }
  async addTag() {
    const data = [
      {
        tag: {
          tag_name: "JavaScript",
          tag_image: "https://holaworld.io/images/languages/javascript.svg",
          popular: true,
        },
        kind:[{
          kind: "front_end"
        }]
      },
      {
        tag: {
          tag_name: "TypeScript",
          tag_image: "https://holaworld.io/images/languages/typescript.svg",
          popular: true,
        },
        kind:[{
          kind: "front_end"
        }]
      },
      {
        tag: {
          tag_name: "React",
          tag_image: "https://holaworld.io/images/languages/react.svg",
          popular: true,
        },
        kind:[{
          kind: "front_end"
        }]
      },
      {
        tag: {
          tag_name: "Vue",
          tag_image: "https://holaworld.io/images/languages/vue.svg",
          popular: true,
        },
        kind:[{
          kind: "front_end"
        }]
      },
      {
        tag: {
          tag_name: "Svelt",
          tag_image: "https://holaworld.io/images/languages/svelte.svg",
          popular: true,
        },
        kind:[{
          kind: "front_end"
        }]
      },
      {
        tag: {
          tag_name: "Nodejs",
          tag_image: "https://holaworld.io/images/languages/nodejs.svg",
          popular: true,
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "Nextjs",
          tag_image: "https://holaworld.io/images/languages/nextjs.svg",
          popular: true,
        },
        kind:[{
          kind: "front_end"
        }]
      },
      {
        tag: {
          tag_name: "Java",
          tag_image: "https://holaworld.io/images/languages/java.svg",
          popular: true,
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "Spring",
          tag_image: "https://holaworld.io/images/languages/spring.svg",
          popular: true,
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "Go",
          tag_image: "https://holaworld.io/images/languages/go.svg",
          popular: true,
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "Nestjs",
          tag_image: "https://holaworld.io/images/languages/nestjs.svg",
          popular: true,
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "Kotlin",
          tag_image: "https://holaworld.io/images/languages/kotlin.svg",
        },
        kind:[{
          kind: "back_end"
        },{
          kind: "mobile"
        }]
      },
      {
        tag: {
          tag_name: "Express",
          tag_image: "https://holaworld.io/images/languages/express.svg",
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "MySQL",
          tag_image: "https://holaworld.io/images/languages/mysql.svg",
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "MongoDB",
          tag_image: "https://holaworld.io/images/languages/mongodb.svg",
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "Python",
          tag_image: "https://holaworld.io/images/languages/python.svg",
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "Django",
          tag_image: "https://holaworld.io/images/languages/django.svg",
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "php",
          tag_image: "https://holaworld.io/images/languages/php.svg",
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "GraphQL",
          tag_image: "https://holaworld.io/images/languages/graphql.svg",
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "Firebase",
          tag_image: "https://holaworld.io/images/languages/firebase.svg",
        },
        kind:[{
          kind: "back_end"
        }]
      },
      {
        tag: {
          tag_name: "Flutter",
          tag_image: "https://holaworld.io/images/languages/flutter.svg",
        },
        kind:[{
          kind: "mobile"
        }]
      },
      {
        tag: {
          tag_name: "Swift",
          tag_image: "https://holaworld.io/images/languages/swift.svg",
        },
        kind:[{
          kind: "mobile"
        }]
      },
      {
        tag: {
          tag_name: "ReactNative",
          tag_image: "https://holaworld.io/images/languages/reactnative.svg",
        },
        kind:[{
          kind: "mobile"
        }]
      },
      {
        tag: {
          tag_name: "Unity",
          tag_image: "https://holaworld.io/images/languages/unity.svg",
        },
        kind:[{
          kind: "mobile"
        }]
      },
      {
        tag: {
          tag_name: "AWS",
          tag_image: "https://holaworld.io/images/languages/aws.svg",
        },
        kind:[{
          kind: "etc"
        }]
      },
      {
        tag: {
          tag_name: "Kubernetes",
          tag_image: "https://holaworld.io/images/languages/kubernetes.svg",
        },
        kind:[{
          kind: "etc"
        }]
      },
      {
        tag: {
          tag_name: "Docker",
          tag_image: "https://holaworld.io/images/languages/docker.svg",
        },
        kind:[{
          kind: "etc"
        }]
      },
      {
        tag: {
          tag_name: "Git",
          tag_image: "https://holaworld.io/images/languages/git.svg",
        },
        kind:[{
          kind: "etc"
        }]
      },
      {
        tag: {
          tag_name: "Figma",
          tag_image: "https://holaworld.io/images/languages/figma.svg",
        },
        kind:[{
          kind: "etc"
        }]
      },
      {
        tag: {
          tag_name: "Zeplin",
          tag_image: "https://holaworld.io/images/languages/zeplin.svg",
        },
        kind:[{
          kind: "etc"
        }]
      },
      {
        tag:{
          tag_name: "Jest",
          tag_image: "https://holaworld.io/images/languages/jest.svg",
        },
        kind:[{
          kind: "etc"
        }]
      },
    ];

    // const createRecruit = await this.Recruit.findOrCreate({
    //   where:{
    //     user_id: userId,
    //     study_id: studyId,
    //   },
    //   defaults:{
    //     user_id:userId,
    //     study_id:studyId
    //   }
    // });
    const createTag = data.map(async (tagData)=>{
      const tagid = await this.Tag.create(tagData.tag);
      tagData.kind.map(async (kindData)=>{
        await this.TagKind.findOrCreate({
          where:{
            tag_id:tagid.id},
          defaults:kindData
        })
      })
    }
    )
    return createTag;
  }
}

module.exports = new TagService(Tag,TagKind);
