const Project = require("../models/Project");
const Client = require("../models/Client");
const Country = require("../models/Country");
const State = require("../models/State");
const College_Type = require("../models/College_Type");
const Governament = require("../models/Governament");
const Aided = require("../models/Aided");
const Private = require("../models/Private");
const College = require("../models/College");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// Project Type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

// Client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

// Country Type
const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

// State Type
const StateType = new GraphQLObjectType({
  name: "State",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    country: {
      type: CountryType,
      resolve(parent, args) {
        return Country.findById(parent.countryId);
      },
    },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});
// College_Type
const College_TypeType = new GraphQLObjectType({
  name: "College_Type",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    state: {
      type: StateType,
      resolve(parent, args) {
        return State.findById(parent.stateId);
      },
    },
  }),
});
//Governament
const GovernamentType = new GraphQLObjectType({
  name: "Governament",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    state: {
      type: StateType,
      resolve(parent, args) {
        return State.findById(parent.stateId);
      },
    },
    college_type: {
      type: College_TypeType,
      resolve(parent, args) {
        return College_Type.findById(parent.college_typeId);
      },
    },
  }),
});
//Aided
const AidedType = new GraphQLObjectType({
  name: "Aided",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    state: {
      type: StateType,
      resolve(parent, args) {
        return State.findById(parent.stateId);
      },
    },
    college_type: {
      type: College_TypeType,
      resolve(parent, args) {
        return College_Type.findById(parent.college_typeId);
      },
    },
  }),
});

//Private
const PrivateType = new GraphQLObjectType({
  name: "Private",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    state: {
      type: StateType,
      resolve(parent, args) {
        return State.findById(parent.stateId);
      },
    },
    college_type: {
      type: College_TypeType,
      resolve(parent, args) {
        return College_Type.findById(parent.college_typeId);
      },
    },
  }),
});

//College
const CollegeType = new GraphQLObjectType({
  name: "College",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    state: {
      type: StateType,
      resolve(parent, args) {
        return State.findById(parent.stateId);
      },
    },
    college_type: {
      type: College_TypeType,
      resolve(parent, args) {
        return College_Type.findById(parent.college_typeId);
      },
    },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },

    states: {
      type: new GraphQLList(StateType),
      resolve(parent, args) {
        return State.find();
      },
    },
    state: {
      type: StateType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return State.findById(args.id);
      },
    },

    college_types: {
      type: new GraphQLList(College_TypeType),
      resolve(parent, args) {
        return College_Type.find();
      },
    },
    college_type: {
      type: College_TypeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return College_Type.findById(args.id);
      },
    },

    governaments: {
      type: new GraphQLList(GovernamentType),
      resolve(parent, args) {
        return Governament.find();
      },
    },
    governament: {
      type: GovernamentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Governament.findById(args.id);
      },
    },

    aideds: {
      type: new GraphQLList(AidedType),
      resolve(parent, args) {
        return Aided.find();
      },
    },
    aided: {
      type: AidedType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Aided.findById(args.id);
      },
    },

    privates: {
      type: new GraphQLList(PrivateType),
      resolve(parent, args) {
        return Private.find();
      },
    },
    private: {
      type: PrivateType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Private.findById(args.id);
      },
    },

    colleges: {
      type: new GraphQLList(CollegeType),
      resolve(parent, args) {
        return College.find();
      },
    },
    college: {
      type: CollegeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return College.findById(args.id);
      },
    },

    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },

    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },

    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return Country.find();
      },
    },
    country: {
      type: CountryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Country.findById(args.id);
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a client
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return client.save();
      },
    },
    // Delete a client
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        Project.find({ clientId: args.id }).then((projects) => {
          projects.forEach((project) => {
            project.deleteOne();
          });
        });

        return Client.findByIdAndRemove(args.id);
      },
    },

    // Add a Country
    addCountry: {
      type: CountryType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const country = new Country({
          name: args.name,
          description: args.description,
          clientId: args.clientId,
        });

        return country.save();
      },
    },
    // Delete a project/Country
    deleteCountry: {
      type:CountryType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Country.findByIdAndRemove(args.id);
      },
    },
    // Update a project/Country
    updateCountry: {
      type: CountryType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Country.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },

    // Add a State
    addState: {
      type: StateType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "StateStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        countryId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const state = new State({
          name: args.name,
          description: args.description,
          status: args.status,
          countryId: args.countryId,
        });

        return state.save();
      },
    },
    // Delete a State
    deleteState: {
      type: StateType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return State.findByIdAndRemove(args.id);
      },
    },
    // Update a project /state
    updateState: {
      type: StateType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "StateStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return State.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },

    // Add a College_Type
    addCollege_Type: {
      type: College_TypeType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "College_TypeStatus",
            values: {
              new: { value: "Governament" },
              progress: { value: "Aided" },
              completed: { value: "Private" },
            },
          }),
          defaultValue: "Governament",
        },
        stateId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const college_type = new College_Type({
          title: args.title,
          name: args.name,
          description: args.description,
          status: args.status,
          stateId: args.stateId,
        });

        return college_type.save();
      },
    },
    // Delete a State
    deleteCollege_Type: {
      type: College_TypeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return College_Type.findByIdAndRemove(args.id);
      },
    },
    // Update a project /state
    updateCollege_Type: {
      type: College_TypeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "College_TypeStatusUpdate",
            values: {
              new: { value: "Governament" },
              progress: { value: "Aided" },
              completed: { value: "Private" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return College_Type.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },

    // Add a Governament
    addGovernament: {
      type: GovernamentType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        stateId: { type: GraphQLNonNull(GraphQLID) },
        college_typeId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const governament = new Governament({
          title: args.title,
          name: args.name,
          description: args.description,
          stateId: args.stateId,
          college_typeId: args.college_typeId,
        });

        return governament.save();
      },
    },
    // Delete a State
    deleteGovernament: {
      type: GovernamentType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Governament.findByIdAndRemove(args.id);
      },
    },
    // Update a project /state
    updateGovernament: {
      type: GovernamentType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return College_Type.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              name: args.name,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },

    // Add a Aided
    addAided: {
      type: AidedType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        stateId: { type: GraphQLNonNull(GraphQLID) },
        college_typeId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const aided = new Aided({
          title: args.title,
          name: args.name,
          description: args.description,
          stateId: args.stateId,
          college_typeId: args.college_typeId,
        });

        return aided.save();
      },
    },
    // Delete a State
    deleteAided: {
      type: AidedType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Aided.findByIdAndRemove(args.id);
      },
    },
    // Update a project /state
    updateAided: {
      type: AidedType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Aided.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              name: args.name,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },

    // Add a Private
    addPrivate: {
      type: PrivateType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        stateId: { type: GraphQLNonNull(GraphQLID) },
        college_typeId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const private = new Private({
          title: args.title,
          name: args.name,
          description: args.description,
          stateId: args.stateId,
          college_typeId: args.college_typeId,
        });

        return private.save();
      },
    },
    // Delete a State
    deletePrivate: {
      type: PrivateType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Private.findByIdAndRemove(args.id);
      },
    },
    // Update a project /state
    updatePrivate: {
      type: PrivateType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Private.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              name: args.name,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },

    // Add a College
    addCollege: {
      type: CollegeType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        stateId: { type: GraphQLNonNull(GraphQLID) },
        college_typeId: { type: GraphQLNonNull(GraphQLID) },
        status: {
          type: new GraphQLEnumType({
            name: "CollegeStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const college = new College({
          title: args.title,
          name: args.name,
          description: args.description,
          stateId: args.stateId,
          college_typeId: args.college_typeId,
          status: args.status,
          clientId: args.clientId,
        });

        return college.save();
      },
    },
    // Delete a State
    deleteCollege: {
      type: CollegeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return College.findByIdAndRemove(args.id);
      },
    },
    // Update a project /state
    updateCollege: {
      type: CollegeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "CollegeStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return College.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },

    // Add a State
    addState: {
      type: StateType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "StateStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        countryId: { type: GraphQLNonNull(GraphQLID) },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const state = new State({
          name: args.name,
          description: args.description,
          status: args.status,
          countryId: args.countryId,
          clientId: args.clientId,
        });

        return state.save();
      },
    },
    // Delete a State
    deleteState: {
      type: StateType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return State.findByIdAndRemove(args.id);
      },
    },
    // Update a project /state
    updateState: {
      type: StateType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "StateStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return State.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },

    // Add a project
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });

        return project.save();
      },
    },
    // Delete a project
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Project.findByIdAndRemove(args.id);
      },
    },
    // Update a project
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
