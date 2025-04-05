//CRUD for Member data handling
const Member = require('../model/memberModel')

async function getAllMembers(){
    return Member.find();
}

async function addMember(member){
    const memberData = new Member(member);
    return memberData.save();
}

async function deleteMember(){
    return Member.findOneAndDelete(memberId)
}

async function updateMember(){
    return Member.findOneAndUpdate({ memberId:memberId},memberData,{new : true})
}

module.exports = { getAllMembers, addMember, deleteMember,updateMember }