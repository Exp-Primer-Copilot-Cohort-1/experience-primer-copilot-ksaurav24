function SkillsMember(){
    this.name = "SkillsMember";
    this.age = 0;
    this.skills = [];
    this.addSkill = function(skill){
        this.skills.push(skill);
    }
    this.getSkills = function(){
        return this.skills;
    }
    this.setAge = function(age){
        this.age = age;
    }
    this.getAge = function(){
        return this.age;
    }
}