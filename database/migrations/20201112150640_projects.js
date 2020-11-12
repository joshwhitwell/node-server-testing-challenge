exports.up = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128).notNullable().unique()
        tbl.boolean('project_completed').notNullable().defaultTo(false)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects')
}
