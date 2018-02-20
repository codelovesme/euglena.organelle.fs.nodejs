import * as euglena_template from "@euglena/template";
import * as euglena from "@euglena/core";
import Particle = euglena.AnyParticle;
export declare class Organelle extends euglena.alive.Organelle<particles.incoming.SapContent> {
    static readonly NAME: string;
    private sapContent;
    constructor();
    protected bindActions(addAction: (particleName: string, action: (particle: Particle, callback: (particle: Particle) => void) => void) => void): void;
    private getAlive();
}
export declare namespace particles {
    namespace incoming {
        interface SapContent {
            euglenaName: string;
        }
        class Sap extends euglena.ParticleV2<SapContent> {
            static readonly NAME: string;
            /**
             *  TODO:
             * Add fields needed from outside
             * before started the organelle working
             */
            constructor(of: string, data: SapContent);
        }
        interface WriteBase64FileContent {
            file: euglena_template.alive.particle.Base64File;
            path: string;
        }
        class WriteBase64File extends euglena.ParticleV2<WriteBase64FileContent> {
            static readonly NAME: string;
            constructor(content: WriteBase64FileContent, of: string);
        }
    }
    namespace outgoing {
    }
    namespace shared {
    }
}
