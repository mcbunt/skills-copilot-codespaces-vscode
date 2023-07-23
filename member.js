function skillsMember() {
    var skills = ['html', 'css', 'js', 'php', 'mysql'];
    var member = {
        name: 'John',
        age: 25,
        skills: skills,
        addSkill: function (skill) {
            this.skills.push(skill);
        }
    };
    return member;
}

 