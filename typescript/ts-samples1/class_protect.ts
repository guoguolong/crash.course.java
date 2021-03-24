interface Teacher {
    teach(): string
}
interface Student {
    learn(): void
}

function getPerson(): Teacher|Student {
    let t: Teacher;
    t = new MTeacher;
    return t;
}
class MTeacher implements Teacher {
    teach() {
        return 'Teach you son.'
    }
}
function isTeacher(p: Teacher|Student): p is Teacher {
    // return (p as Teacher).teach !== undefined;
    return p instanceof MTeacher
}

const person = getPerson();
if (person instanceof MTeacher) {
    const r = person.teach();
    console.log('Result....', r)
} else {
    console.log('not teacher')
}