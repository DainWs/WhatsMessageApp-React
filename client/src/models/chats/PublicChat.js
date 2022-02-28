import Chat from "./Chat";

class PublicChat extends Chat {
    constructor(genericObject = { id: '', name: null, messages: [] }) {
        super(genericObject.id);
        this.setName(genericObject.name);
        this.setMessages(genericObject.messages);
        this.setWritingUsers(genericObject.writingUsers);
    }

    setName(name) {
        if (name != undefined && name != null) {
            this.name = name;
        } else {
            this.name = `PublicChat_${new Date().getTime()}`;
        }
    }

    getName() {
        return this.name;
    }

    belongsTo(users) {
        return false;
    }
}
export default PublicChat;