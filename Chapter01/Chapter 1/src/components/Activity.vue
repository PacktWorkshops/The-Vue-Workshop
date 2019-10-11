<template>
  <article>
    <div :class="$style.controls">
      <button @click="triggerPrint">Print</button>
      <button @click="toggleForm">Edit</button>
    </div>
    <div v-if="showForm" :class="$style.form">
      <div :class="$style.formGroup">
        <h3>Overview:</h3>
        <label>
          Name
          <input type="text" v-model="form.name" />
          <small
            >Previously: <span v-once>{{ form.name }}</span></small
          >
        </label>

        <label>
          Title
          <input type="text" v-model="form.title" />
          <small
            >Previously: <span v-once>{{ form.title }}</span></small
          >
        </label>

        <label>
          Summary
          <textarea type="text" v-model="form.summary" />
        </label>

        <label>
          Skills
          <input type="text" v-model="newSkill" />
        </label>
        <button @click="addItem('skills', 'newSkill')">+ Add</button>
        <div
          v-for="(item, n) in form.skills"
          :key="`skillsPreview${n}`"
          :class="$style.preview"
        >
          {{ item }}
          <button @click="deleteItem('skills', n)">Delete</button>
        </div>
      </div>

      <div :class="$style.formGroup">
        <h3>Experience:</h3>

        <div>
          <div
            v-for="(item, n) in form.experience"
            :key="`expPreview${n}`"
            :class="$style.preview"
          >
            {{ formatPreview(item) }}
            <button @click="deleteItem('experience', n)">Delete</button>
          </div>
        </div>
        <div :class="$style.fieldset">
          <label>
            Company
            <input type="text" v-model="newExperience.company" />
          </label>

          <label>
            Title
            <input type="text" v-model="newExperience.title" />
          </label>

          <label>
            Start Year
            <input type="text" v-model="newExperience.startYear" />
          </label>
          <label>
            End Year
            <input type="text" v-model="newExperience.endYear" />
          </label>
          <label>
            Summary
            <textarea type="text" v-model="newExperience.summary" />
          </label>

          <button @click="addItem('experience', 'newExperience')">+ Add</button>
        </div>
      </div>

      <div :class="$style.formGroup">
        <h3>Education:</h3>
        <div>
          <div
            v-for="(item, n) in form.education"
            :key="`eduPreview${n}`"
            :class="$style.preview"
          >
            {{ formatPreview(item) }}
            <button @click="deleteItem('education', n)">Delete</button>
          </div>
        </div>
        <div :class="$style.fieldset">
          <label>
            Institution
            <input type="text" v-model="newEducation.name" />
          </label>

          <label>
            Degree
            <input type="text" v-model="newEducation.degree" />
          </label>
          <label>
            Start Year
            <input type="text" v-model="newEducation.startYear" />
          </label>
          <label>
            End Year
            <input type="text" v-model="newEducation.endYear" />
          </label>

          <label>
            Summary
            <textarea type="text" v-model="newEducation.summary" />
          </label>
          <button @click="addItem('education', 'newEducation')">+ Add</button>
        </div>
      </div>
    </div>

    <div :class="$style.cv">
      <div :class="$style.left">
        <h1 :class="$style.name">{{ form.name }}</h1>
        <span :class="$style.title">{{ form.title }}</span>

        <ul :class="[$style.overview, $style.skills]">
          <li
            v-for="(item, i) in form.skills"
            :key="`skills-${i}`"
            :class="$style.skill"
            >{{ item }}</li
          >
        </ul>
      </div>
      <div :class="$style.right">
        <h2 :class="$style.h2">Summary</h2>
        <div>
          {{ form.summary }}
        </div>

        <div v-if="form.experience.length > 0" :class="$style.section">
          <h2 :class="$style.h2">Work History</h2>
          <ul :class="$style.overview">
            <li v-for="(item, i) in form.experience" :key="`expList${i}`">
              <div :class="$style.highlights">
                <div>
                  <strong>{{ item.company }}</strong
                  ><br />
                  {{ item.title }}
                </div>
                <div>
                  {{ item.startYear }} -
                  {{ item.endYear }}
                </div>
              </div>

              <p>{{ item.summary }}</p>
            </li>
          </ul>
        </div>
        <div v-if="form.education.length > 0" :class="$style.section">
          <h2 :class="$style.h2">Education</h2>
          <ul :class="$style.overview">
            <li v-for="(item, i) in form.education" :key="`eduList${i}`">
              <div :class="$style.highlights">
                <div>
                  <strong>{{ item.name }}</strong
                  ><br />
                  {{ item.degree }}
                </div>
                <div>
                  {{ item.startYear }} -
                  {{ item.endYear }}
                </div>
              </div>

              <p>{{ item.summary }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      showForm: true,
      newSkill: '',
      newExperience: {
        company: '',
        title: '',
        startYear: '',
        endYear: '',
        summary: '',
        isCurrent: false,
      },
      newEducation: {
        name: '',
        degree: '',
        startYear: '',
        endYear: '',
        summary: '',
      },
      form: {
        name: '',
        title: '',
        summary: '',
        skills: [],
        experience: [],
        education: [],
      },
    }
  },

  /**
   * Refer to Ex. 11 - Lifecycles
   */
  mounted() {
    // Mimick we're getting the users data from an external source
    // and assiging it to the default form data
    this.form = {
      name: 'John Doe',
      title: 'Frontend Developer',
      summary:
        'Dynamic and motivated professional with a proven record of generating and building relationships, managing projects from concept to completion, designing educational strategies, and coaching individuals to success. Skilled in building cross-functional teams, demonstrating exceptional communication skills, and making critical decisions during challenges. Adaptable and transformational leader with an ability to work independently, creating effective presentations, and developing opportunities that further establish organizational goals.',
      experience: [
        {
          company: 'Agency #2',
          title: 'Developer',
          startYear: '2016',
          endYear: '2019',
          summary:
            'Dynamic and motivated professional with a proven record of generating and building relationships, managing projects from concept to completion',
          isCurrent: false,
        },
        {
          company: 'Agency #1',
          title: 'Developer',
          startYear: '2014',
          endYear: '2016',
          summary:
            'Dynamic and motivated professional with a proven record of generating and building relationships, managing projects from concept to completion',
          isCurrent: false,
        },
      ],
      education: [
        {
          name: 'Swinburne',
          degree: 'Bachelor of Comm Design',
          startYear: '2011',
          endYear: '2014',
          summary:
            'Dynamic and motivated professional with a proven record of generating and building relationships, managing projects from concept to completion',
        },
        {
          name: 'RMIT',
          degree: 'Bachelor of Computer Science',
          startYear: '2011',
          endYear: '2014',
          summary:
            'Dynamic and motivated professional with a proven record of generating and building relationships, managing projects from concept to completion',
        },
      ],
      skills: ['Javascript', 'Vue'],
    }
  },

  methods: {
    /**
     * Refer to Ex. 9 - Triggering Methods
     */
    triggerPrint() {
      print()
    },

    toggleForm() {
      this.showForm = !this.showForm
    },

    /**
     * @param {string} key          maps to an array within this.form context.
     * @param {string} index        index of the object being removed from the this.form[key] array.
     */
    deleteItem(key, index) {
      this.form[key] = this.form[key].filter((item, i) => i !== index)
    },

    /**
     * @param {string} key           maps to an array within this.form context.
     * @param {string} objKey        maps to an v-model form object which is pushed to this.form[key].
     */
    addItem(key, objKey) {
      this.form[key].push(this[objKey])
    },

    /**
     * Refer to Ex. 10 - Returning Methods
     * @param {string} item         an experience or education form object
     */
    formatPreview(item) {
      if (item.degree) {
        return `${item.degree} / ${item.name}`
      } else {
        return `${item.company} / ${item.title}`
      }
    },
  },
}
</script>

<style lang="scss" module>
@import '../styles/activity';

@media print {
  .form,
  .controls {
    display: none !important;
  }
}
</style>
