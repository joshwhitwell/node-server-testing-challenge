exports.seed = function (knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        { project_name: 'Clean House' },
        { project_name: 'Yard Work' },
        { project_name: 'Build Shed' }
      ])
    })
}
