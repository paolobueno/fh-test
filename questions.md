Questions
===
Candidate: Paolo Bueno
Email: [paolohaji@gmail.com](mailto:paolohaji@gmail.com)

Q1
---
Services must be mockable to allow for unit testing. Ideally this mocking should be implemented at the level of the communication between services, which is usually the network, to spoof the answers expected of services which are depended upon.

Mocking at this level ensures that unit tests do not require a multi-machine setup and do not run slowly due to depending on a network stack subject to high latency. Tests that depend on such a complicated environment are already entering the *integration test* level.

This necessity of mocking promoted by the implementation of unit tests also helps keeping services more loosely coupled, forcing them to keep their inter-dependencies at the 'edge' of their internal architecture.

The services must also be tested in unison, so in addition to the internal *unit tests* that mock away other services, *integration tests* must be implemented in order to validate the proper communication between them in an environment more closely resembling production. While *unit tests* are concerned with the correctness of the services' internal implementation, *integration tests* would be concerned with wether they can actually produce their work in conjunction (e.g. test if a set of the services can cooperate to correctly implement a feature.)

Q2
---
In this scenario communication with the rest of the team is paramount. A blocked team member will, if she remains blocked, 
make potentially rash and wrong decisions that will cost much more than the time she herself spent in this blocked state.

Even if she makes correct decisions from a state of doubt, the fact that she most likely was dealing with a complicated detail means it should be interesting to submit it as an issue for discussion by the team, increasing the shared knowledge of the solution.

Q3
---
I would consider the following:

- Choosing between implementing a micro-service architecture from the get go for scalability or a simpler monolithic solution for a slightly quicker initial release;
- Determine hosting based on architecture, DevOps costs (development-production environment parity, deployment, monitoring, etc.), and security and privacy requirements;
- Utilize simple standard protocols and formats (JSON over HTTP, OAuth, SSL) for better library support on the various heterogeneous clients.

Q4
---
Backwards compatibility with clients can be maintained by avoiding altering the public API. New implementations can be developed in parallel with maintenance on the legacy system, and can also adopt a more modular internal structure, and after testing can replace the original components of the distributed system.

Assuming feature parity, this deployment can be made in the form of a gradual substitution, with the new implementation being routed gradually more and more of the total processing of the API in order to test for load capacity and correctness in production, and also allowing for a quick rollback to the legacy implementation should any errors occur.

Q5
---
I personally value self-documenting code, that's short and modular that allow for quick reading and understanding. The presence of unit tests is also always welcome in order to reduce the time needed to understand a code base, specially if IDE features allow for quick browsing to the relevant unit tests, since they go a step further to convey the original intention of the developer as to *how* a particular piece of code should behave when she was actually implementing it.

Comments should be restricted to parseable preambles to methods (i.e. Javadocs for Java and JS, Heredocs for Ruby, etc.) that can be used by IDEs and documentation builders, and to explain particularly complicated implementation details (most of these can be avoided by refactoring out an aptly named function.) This is due to [comment rot](https://blogs.msdn.microsoft.com/ericlippert/2004/05/04/aargh-part-five-comment-rot/) (in the comments of the linked article, Eric Lippert says that this idea goes back to lectures by prof. Kernighan, and I've seen other authors that reference the same general idea by different names.)

Q6
---
I believe the product I've had the most experience with is Fedora, used as a development environment particularly when some tools were more easily available as RPM packages.

The company's business model as a whole is quite interesting, however, since advancements in open source are beneficial to the entire community, and basing profits off providing professional services on top of open platforms is very just and sustainable. You can see more conventional closed-source companies moving towards this model in recent years.

Q7
---

I am interpreting this question to mean the *supplying* of a solution through these different models.

Here are my suggested considerations in the form of a pros and cons list:

**SaaS**

Pros:

- Control over the production infrastructure
- Deployment and setup of new clients is faster and more scalable
- Can be more cost-effective particularly for smaller clients (long tail?)
- Easy to maintain all clients on the latest version of the solution
- Customer support can activate developers directly for quick fixes to issues

Cons:

- Infrastructure maintenance and management must be dealt with (can be done through PaaS/IaaS)
- Storing data for customers is a legal liability and increases security and privacy concerns
- Can be harder to tailor the solution for a specific customer's needs

**On Premises**

Pros:

- Data security concerns is on the client's side
- Infrastructure is handled by the client
- Solution can count on physical/network isolation as an extra layer of security
- Easier to tailor an installation to the customer's needs
- Customer's technical crew is responsible for overall maintenance

Cons:

- Deployment of updates can be very hard and customers can end up with legacy versions
- Requires field technical support crew
- Can only sell to 'big' customers
- Deployment must account for very different infrastructure scenarios, with varying restrictions
- Customer support can be burdened with faults on the customer's side (infrastructure outages and performance issues, user incompetence, neglecting of updates, etc.)

Q8
---

**Microservices** are a way of architeturing a solution based on various small and independent pieces that are in turn simpler and more composable. This is opposed to a **Monolithic** architecture in which the entire solution runs as a single entity, most likely in a single OS process.

**Monolithic** software is more traditional and can be simpler to develop (and setup a development environment for) and test, and has a smaller communication overhead, thus can be better for smaller projects both in performance and in time to market. However it is restricted to vertical scaling (i.e. infrastructure) and it is harder to maintain loose coupling.

**Microservices** are on the other hand intrinsically scalable due to individual components being able to be assigned a number of worker processes dinamically, components are small and can be assigned to different developers/teams as the project grows so new team members might be able to get up to speed quicker. The setup of a development environment can be harder, and will be more different from production. There's also a much higher communication overhead that can offset the increase in performance due to horizontal scaling.

An initial Monolithic implementation can be refactored into a Microservices architecture as a project scales, and traditional best practices of loose coupling and precise interfaces already steer a good design towards this refactorability. The main difference is that communication between modules is done through serialized network calls instead of direct library method calling.

Q9
---

Programming has often been described as the closest thing we have to arcane magic or superhero powers, and I believe it allows us precisely the same thing: do things our human bodies and minds wouldn't be able to by themselves.

Computers allow us to transcend our physical bodies in many ways, not only in sheer useful processing power, but in communications, perfect automation of tasks, and, with IoT made increasingly possible due to cheapening of technology, our interactions with our surroundings in a few years would be [Clarke's law](http://tvtropes.org/pmwiki/pmwiki.php/Main/ClarkesThirdLaw)-level to us today.

Programmers are but the wizards manipulating these untapped powers.

The software development field is also incredibly dinamic and new, and it allows me to join colleagues at the frontier of human knowledge in an incredibly recent field: Ada Lovelace is just over 200 years old, while the god-architect Ahmenotep is almost 3500.

Q10
---

I believe in the next 5 years Internet of Things will be a thing, and challenges addressed by mobile OSs and applications are shared with embedded devices. As such we'll be faced with integrating with lots of independent and smart devices in our projects, all with an unbelievable different amount of sensors and interactions with the external world.

Just as Android Studio already has support for smart watch and TV apps, we'll soon be seeing refrigerator app templates and implementing grocery list APIs.

Q11
---

I'm most proud so far of being able to successfully manage a small team and design and implement a mid-size mobile application in native Android and iOS, with a team with little to none experience in these technologies.

Q12
---

API security is best done through established protocols such as OAuth1, which utilizes keys with an appropriate size, avoiding issues with usernames and passwords, and (through HMAC) prevents modification of the payload without explicitly relying on SSL or other transport-level encryption.

A simpler solution can rely on JWTs as expirable tokens given to clients after authentication.